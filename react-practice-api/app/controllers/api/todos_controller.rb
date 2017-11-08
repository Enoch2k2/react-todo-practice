class Api::TodosController < ApplicationController
    before_action :set_todo, only: [:show, :update, :destroy]

    def index
        render json: Todo.all, status: 200
    end

    def show
        render json: @todo, status: 200
    end

    def create
        @todo = Todo.new(todo_params)
        if @todo.save
            render json: @todo, status: 200
        else
            render json: {message: @todo.errors.full_messages}, status: 400
        end
    end

    def update
        if @todo.update(todo_params)
            render json: @todo, status: 200
        else
            render json: {message: @todo.errors.full_messages}, status: 400
        end
    end

    def destroy
        todo = @todo.name
        if @todo.destroy
            render json: {message: todo + " has been deleted."}, status: 200
        else
            render json: {message: "could not delete the todo."}, status: 400
        end
    end

    private
        def set_todo
            @todo = Todo.find(params[:id])
        end

        def todo_params
            params.permit(:name, :completed)
        end
end