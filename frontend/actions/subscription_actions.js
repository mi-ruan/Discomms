import * as SubscriptionApiUtil from '../util/subscription_api_util.js'

export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";
export const REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION";

export const receiveSubcription = payload => {
  return{
    type: RECEIVE_SUBSCRIPTION,
    serverId: payload.server_id,
    subscriberId: payload.subscriber_id
  };
};

export const removeSubscription = (serverId, userId) => {
  return {
    type: REMOVE_SUBSCRIPTION,
    serverId,
    userId
  };
};

export const createSubscription = serverId => dispatch => {
  return (SubscriptionApiUtil.createSub(serverId)
  .then(subscription => dispatch(receiveSubcription(subscription))))
}

export const deleteSubscription = (serverId, userId) => dispatch => {
  return (SubscriptionApiUtil.deleteSub(serverId, userId)
  .then(() => dispatch(removeSubscription(serverId, userId))))
}
