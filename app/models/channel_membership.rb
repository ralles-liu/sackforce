class ChannelMembership < ApplicationRecord 
    validates :user_id, presence: true
    validates :channel_id, presence: true
    validates :user_id, uniqueness: { scope: :channel_id }
    
    
    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id,
        primary_key: :id


    belongs_to :channel,
        class_name: :Channel,
        foreign_key: :channel_id,
        primary_key: :id


end
