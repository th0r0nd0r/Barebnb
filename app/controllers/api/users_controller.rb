class Api::UsersController < ApplicationController
  def new
  end

  def show
    @user = User.find_by_id(params[:user][:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
      # render json: ["Please fill out all required fields."], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :username, :email, :password, :img_url)
  end
end
