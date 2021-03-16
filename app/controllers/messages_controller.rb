class MessagesController < ApplicationController
  def index 
    @messages = Message.all
  end

  def new 
    @message = Message.new
  end

  def create
    @message = Message.create(message_params)
    if @message.save
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def message_params
    params.require(:message).permit(:content, :image)
  end
end
