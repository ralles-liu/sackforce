class CreateChatChannelMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_channel_memberships do |t|
      t.integer :channel_id, null: false
      t.integer :chat_id, null: false
      t.timestamps
    end
  end
end
