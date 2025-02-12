import { useContext } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card.jsx";
import { ListBulletIcon, ChatBubbleIcon } from "@radix-ui/react-icons";
import { StoreContext } from "../context/Store.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Eye } from "lucide-react";

const Dashboard = () => {
  const { blogs, isLoading } = useContext(StoreContext);
  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
  );

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Total blogs Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Blogs</CardTitle>
            <ListBulletIcon className="h-6 w-6 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {isLoading ? (
                <Skeleton width={50} baseColor="#ccc" />
              ) : (
                blogs.length
              )}
            </p>
            <p className="text-sm text-gray-500">Published blogs</p>
          </CardContent>
        </Card>

        {/* Total Comments Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Comments</CardTitle>
            <ChatBubbleIcon className="h-6 w-6 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {isLoading ? <Skeleton width={50} baseColor="#ccc" /> : 320}
            </p>
            <p className="text-sm text-gray-500">User comments</p>
          </CardContent>
        </Card>

        {/* Total views */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Views</CardTitle>
            <Eye className="h-6 w-6 text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {isLoading ? (
                <Skeleton width={50} baseColor="#ccc" />
              ) : (
                blogs.length
              )}
            </p>
            <p className="text-sm text-gray-500">Published blogs</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Blogs */}
      <div className="ring ring-black/10 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">Recent Blogs</h2>
        <ul className="space-y-2">
          {isLoading
            ? Array(3)
                .fill()
                .map((_, i) => (
                  <li key={i} className="border-b border-black/10 py-2">
                    <Skeleton height={20} baseColor="#ccc" />
                  </li>
                ))
            : sortedBlogs.map((blog, i) => (
                <li
                  className="border-b border-black/10 py-2 flex justify-between"
                  key={i}
                >
                  <strong>📌 {blog.title}</strong>
                  <span>
                    {new Date(blog.publishedDate).toLocaleDateString()}
                  </span>
                </li>
              ))}
        </ul>
      </div>

      {/* Recent Comments */}
      <div className="ring ring-black/10 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">Recent Comments</h2>
        <ul className="space-y-2">
          <li className="border-b border-black/10 py-2">
            💬 <strong>John:</strong>
            {"Great post! Thanks for sharing!"}
          </li>
          <li className="border-b border-black/10 py-2">
            💬 <strong>Sarah:</strong>
            {"This was very helpful!"}
          </li>
          <li className="py-2">
            💬 <strong>Alex:</strong>
            {"Can you write about Redux next?"}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;
