module Api
  module V1
    class UsersController < ApplicationController
      def show
        user = User.find(params[:id].to_i)
        render json: user, except: :password_digest
      end
    end
  end
end