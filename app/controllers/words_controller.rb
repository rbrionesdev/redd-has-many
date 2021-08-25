class WordsController < ApplicationController
  def hotdog
    x = params[:bobross]
    first_sun_name = Sub.first.name
    render component:"Treasure", props: {y:first_sun_name}
  end
end
