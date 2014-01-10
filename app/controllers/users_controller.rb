class UsersController < ApplicationController
  def create
    puts params[:user]
    @user = User.new(params[:user])
    puts @user

    if @user.save
      login!(@user)
      render :json => @user
    else
      render :json => @user.errors.full_messages
    end
  end
end
