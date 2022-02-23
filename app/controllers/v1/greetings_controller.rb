class V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.find(Greeting.pluck(:id).sample)
    render json: {
      greetings: @greetings
    }.to_json
  end
end
