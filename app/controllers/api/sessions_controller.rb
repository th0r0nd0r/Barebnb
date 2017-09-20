class Api::SessionsController < ApplicationController
  def new
  end

  def create
    if params[:user][:email].length >= 1
      user = User.find_by_email(params[:user][:email])
      params[:user][:username] = user.username
    end
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render 'api/users/show'
    else
      render json: ["How can you log out that which has not logged in?"], status: 404
    end
  end


end
