import { useContext, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Loader } from "../components";
import { toast } from "react-toastify";
import { StoreContext } from "../context/Store.jsx";

const Subscribers = () => {
  const { getSubscribers, isLoading, fetchSubscribers, authenticate } =
    useContext(StoreContext);
  const [sorted, setSorted] = useState(0);
  const [isResponse, setIsResponse] = useState(true);

  // Sorting logic for subscribers (which are just email strings)
  const sortedSubscribers = [...getSubscribers()].sort((a, b) => {
    if (sorted === 1) return a.localeCompare(b);
    else if (sorted === 2) return b.localeCompare(a);
    else return 0; // No sort applied; original order is preserved.
  });

  const handleDelete = async (e, email) => {
    e.preventDefault();
    setIsResponse(false);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/email/subscriber`,
        {
          headers: {
            "x-token": authenticate,
            "Content-Type": "application/json",
          },
          method: "DELETE",
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();
      if (result.message) {
        fetchSubscribers();
        toast.success(result.message);
      }
      if (result.error) toast.error(result.error);
    } catch (error) {
      console.error("Error deleting subscriber:", error);
      toast.error("❌ An error occurred. Please try again.");
    } finally {
      setIsResponse(true);
    }
  };

  return (
    <>
      {!isResponse && (
        <Loader className="absolute left-0 top-0 w-full h-full bg-gray-200/50" />
      )}
      <h2 className="text-2xl font-semibold mb-4">Subscribers</h2>

      {/* Subscribers Table */}
      <section className="overflow-x-auto">
        <table className="min-w-full shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-300">
            <tr>
              <th className="py-2 px-4 text-left w-10">#</th>
              <th className="py-2 px-4 text-left">
                <div className="flex items-center">
                  Email
                  <button
                    type="button"
                    className="ml-2 cursor-pointer"
                    onClick={() =>
                      setSorted((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : 0))
                    }
                  >
                    {sorted === 1 ? (
                      <ArrowUp color="#666" width={14} height={14} />
                    ) : sorted === 2 ? (
                      <ArrowDown color="#666" width={14} height={14} />
                    ) : (
                      <ArrowUp color="#aaa" width={12} height={12} />
                    )}
                  </button>
                </div>
              </th>
              <th className="py-2 px-4 text-right"></th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? Array(3)
                  .fill()
                  .map((_, i) => (
                    <tr
                      key={i}
                      className="border-t border-black/15 hover:bg-gray-100"
                    >
                      <td colSpan={3} className="py-2 px-4">
                        <Skeleton height={30} baseColor="#ccc" />
                      </td>
                    </tr>
                  ))
              : sortedSubscribers.map((email, index) => (
                  <tr
                    key={email}
                    className="border-t border-black/15 hover:bg-gray-100"
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4 font-medium">{email}</td>
                    <td className="py-2 px-4 text-right">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 cursor-pointer"
                        onClick={(e) => handleDelete(e, email)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Subscribers;
