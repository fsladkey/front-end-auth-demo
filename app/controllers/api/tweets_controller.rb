class Api::TweetsController < ApplicationController

  def index
    render json: Tweet.all
  end

  def create
    tweet = Tweet.new(content: params[:tweet][:content])
    render json: tweet
  end

end
