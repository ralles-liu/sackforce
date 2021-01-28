class Channel < ApplicationRecord 
    
    validates :admin_id, presence: true
    validates :name, presence: true
    validates :description, presence: true
    validates :public, inclusion: {in: [true, false]}
    
    belongs_to :admin,
        class_name: :User,
        foreign_key: :admin_id,
        primary_key: :id

    has_many :channel_memberships, 
        class_name: :ChannelMembership,
        foreign_key: :channel_id,
        primary_key: :id, 
        dependent: :destroy

    has_many :users,
        through: :channel_memberships,
        source: :user
    
    has_one :chat_membership,
        class_name: :ChatChannelMembership,
        foreign_key: :channel_id,
        primary_key: :id
    
    has_one :live_chat,
        through: :chat_membership,
        source: :live_chat

    has_many :messages,
        through: :live_chat,
        source: :messages



end
