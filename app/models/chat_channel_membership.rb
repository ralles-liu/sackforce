class ChatChannelMembership < ApplicationRecord

    belongs_to :live_chat,
        class_name: :LiveChat,
        foreign_key: :chat_id,
        primary_key: :id

    belongs_to :channel,
        class_name: :Channel,
        foreign_key: :channel_id,
        primary_key: :id
end
