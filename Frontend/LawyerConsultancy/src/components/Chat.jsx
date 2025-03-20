import React, { useEffect, useContext, useState } from 'react';
import { MessageSquare, Send, Search, Plus, Clock, User, Settings, ChevronRight, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContextProvider';

const Chat = () => {
  const contextVars = useContext(LoginContext);
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [responseList, updateResponseList] = useState([{ message: "Hiiii there, I am your leagal Assistant" }])
  const [questionList, updateQuestionList] = useState([{ message: "Hello, there" }])



  const sendPrompt = () => {

    if (prompt.length < 1)
      return

    updateQuestionList((prev) => [...prev, { message: prompt }]);

    console.log("is it being called")
    fetch("http://localhost:8000/incoming/prompt/", {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        prompt: prompt
      })
    }).then((res) => {
      return res.json();
    }).then((res) => {

      if (res.status === "OK") {
        console.log("Response will be printed below -->")
        console.log(res.answer) ;
        updateResponseList((prev) => [...prev, { message: res.answer }]);
      }
    }).catch((err) => {
      console.log("Error occurred");
    })
  };


  useEffect(() => {
    (!contextVars.isAuthenticated) ? navigate("/login") : "";
  });

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Conversations</h2>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Plus className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <div className="relative">
            <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          <div className="divide-y divide-gray-200">
            {/* Active Conversation */}
            <div className="bg-blue-50 p-4 hover:bg-blue-50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-blue-600">Property Law Inquiry</h3>
                    <p className="text-sm text-gray-500">Last message: 2 mins ago</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-blue-600" />
              </div>
            </div>

            {/* Past Conversations */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-gray-400" />
                    <div>
                      <h3 className="font-medium text-gray-700">Contract Review #{i}</h3>
                      <p className="text-sm text-gray-500">Last message: {i} days ago</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">John Doe</p>
                <p className="text-sm text-gray-500">Premium Plan</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-4">
            <MessageSquare className="h-6 w-6 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">AI Legal Assistant</h1>
              <p className="text-sm text-gray-500">Response time: typically under 1 minute</p>
            </div>
          </div>
        </div>


        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
          {questionList.map((object, index) => (
            <div key={index}>
              {/* User Message */}
              <div className="flex items-start space-x-4 justify-end">
                <div className="bg-blue-600 rounded-lg p-4 shadow-sm max-w-2xl">
                  <p className="text-white">{object.message}</p>
                </div>
                <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
              </div>

              {/* AI Response (Only Render if Available) */}
              {responseList[index] && (
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm max-w-2xl">
                    <p className="text-gray-800">{responseList[index].message}</p>
                  </div>
                </div>
              )}
            </div>
          ))}

        </div>


        {/* Input Area */}
        < div className="bg-white border-t border-gray-200 p-6" >
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <input
                onChange={(e) => {
                  setPrompt(e.target.value)
                }}
                type="text"
                placeholder="Type your legal question..."
                className="w-full pl-4 pr-12 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500"

              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Send className="h-5 w-5"
                  onClick={() => {
                    sendPrompt()
                  }}
                />

              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500 text-center">
              Your conversation is private and secure. Press Enter to send your message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;