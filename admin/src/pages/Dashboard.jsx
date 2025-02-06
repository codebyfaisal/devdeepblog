import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card.jsx";
import { ListBulletIcon, ChatBubbleIcon } from "@radix-ui/react-icons";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Blogs</CardTitle>
            <ListBulletIcon className="h-6 w-6 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120</p>
            <p className="text-sm text-gray-500">Published blogs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Comments</CardTitle>
            <ChatBubbleIcon className="h-6 w-6 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">320</p>
            <p className="text-sm text-gray-500">User comments</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Blogs */}
      <div className="ring ring-black/10 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">Recent Blogs</h2>
        <ul className="space-y-2">
          <li className="border-b border-black/10 py-2">
            📌 <strong>How to Build a Blog</strong> - Jan 5, 2025
          </li>
          <li className="border-b border-black/10 py-2">
            📌 <strong>React Tips & Tricks</strong> - Jan 3, 2025
          </li>
          <li className="py-2">
            📌 <strong>Understanding JavaScript Closures</strong> - Jan 1, 2025
          </li>
        </ul>
      </div>

      {/* Recent Comments */}
      <div className="ring ring-black/10 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">Recent Comments</h2>
        <ul className="space-y-2">
          <li className="border-b border-black/10 py-2">
            💬 <strong>John:</strong> "Great post! Thanks for sharing!"
          </li>
          <li className="border-b border-black/10 py-2">
            💬 <strong>Sarah:</strong> "This was very helpful!"
          </li>
          <li className="py-2">
            💬 <strong>Alex:</strong> "Can you write about Redux next?"
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
