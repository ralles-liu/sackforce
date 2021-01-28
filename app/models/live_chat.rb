class LiveChat < ApplicationRecord

    has_many :messages,
        class_name: :Message,
        foreign_key: :chat_id,
        primary_key: :id
    

    
    

end
