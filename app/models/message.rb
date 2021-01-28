class Message < ApplicationRecord
    validates :user_id, presence: true
    validates :chat_id, presence: true
    validates :message, presence: true

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id,  
        primary_key: :id
    
    belongs_to :chat,
        class_name: :LiveChat,
        foreign_key: :chat_id,
        primary_key: :id
    
end
