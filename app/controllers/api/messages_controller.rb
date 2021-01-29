class Api::MessagesController < ApplicationController


    def index
        channel = Channel.find(params[:channelId])
        if channel 
            messages = channel.messages
            @orderedMessages = messages.order(:id)
            # @liveChatId = channel.live_chat.id
            render "api/messages/index"

        else
            render json: ["no channel"], status: 401
        end


    end


    def create
        channel = Channel.find(params[:channelId])
        if channel
            chat = channel.live_chat
            @message = Message.new({user_id: current_user.id, chat_id: chat.id, message: params[:message]})
            
            if @message.save
                render "api/messages/show"
            else
                render json: ["no channel"], status: 404
            end


        else
            render json: ["no channel"], status: 404
        end


    end

end
