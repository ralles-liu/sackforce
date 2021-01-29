
@orderedMessages.each do |message|
    json.set! message.id do
        json.extract! message, :id, :user_id, :chat_id, :message
    end  
end



