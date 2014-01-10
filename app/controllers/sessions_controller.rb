class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user])
    if @user
      login!(@user)
      render :json => @user
    else
      render :json => "Invalid login", :status => 418
    end
  end

  def destroy
    logout!
    head :ok
  end
end
