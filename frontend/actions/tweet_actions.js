import * as APIUtil from '../api_util'

export const RECEIVE_TWEET = "RECEIVE_TWEET";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const FETCH_TWEETS = "FETCH_TWEETS";
export const CREATE_TWEET = "CREATE_TWEET";

export function createTweet(tweet) {
  return { type: CREATE_TWEET, tweet };
}

export function fetchTweets() {
  return { type: FETCH_TWEETS };
}

export function receiveTweet(tweet) {
  return { type: RECEIVE_TWEET, tweet };
}

export function receiveTweets(tweets) {
  return { type: RECEIVE_TWEETS, tweets };
}
