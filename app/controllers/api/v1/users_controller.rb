module Api
  module V1
    class UsersController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        respond_with(User.all)
      end

      def show
        respond_with(User.find(params[:id]))
      end

      def new
      end

      def get_token
        respond_to do |f|
          f.json { render :json => current_user.spotify_token}
        end
      end

      def create
        @user = User.new(user_params)
        if @user.save
          respond_to do |f|
            f.json { render :json => @user }
          end
        end
      end

      def update
        @user = User.find(params[:id])
        if @user.update(user_params)
          respond_to do |f|
            f.json { render :json => @user }
          end
        end
      end

      def destroy
        respond_with User.destroy(params[:id])
      end

      private

        def user_params
          params.require(:user).permit(:data => [:country, :display_name, :email, :href, :id, :product, :uri])
        end

    end
  end
end