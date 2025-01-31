import React from "react";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

const AuthorPage = () => {
  return (
    <section>
      <div className="grid md:grid-cols-7 gap-4 bg-gray-100 p-8 place-items-center">
        <div className="md:col-span-4 md:p-4 space-y-2">
          <h1 className="text-5xl mb-6">Meet the face behind the posts</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            mollitia harum, accusamus impedit eos at perferendis assumenda illum
            nobis, ducimus nihil perspiciatis, quos vel reprehenderit explicabo
            deserunt. Est, fugit minima.
          </p>
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            cum ipsa natus vero dolorem soluta illum nulla cumque quibusdam
            recusandae? Delectus quae nisi architecto repellendus, a
            necessitatibus. Temporibus, consectetur libero.
          </p>
        </div>
        <div className="md:col-span-3 md:p-4">
          <img
            src={
              "https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/loft-office-with-vintage-decor-PFD2JSL-1.jpg"
            }
            alt=""
            className="aspect-square object-cover"
          />
        </div>
      </div>

      <div className="flex gap-2 items-center my-10 bg-gray-100 p-8">
        <p className="text-lg font-bold">Social Media: </p>
        <a
          href="http://www.linkedin.com/in/codebyfaisal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/90 text-white p-2 rounded-xl aspect-square transition duration-200 hover:bg-gray-100 hover:text-black"
        >
          <LinkedInLogoIcon width={20} height={20} className="hover:scale-130"/>
        </a>
        <a
          href="http://www.github.com/codebyfaisal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/90 text-white p-2 rounded-xl aspect-square transition duration-200 hover:bg-gray-100 hover:text-black"
        >
          <GitHubLogoIcon width={20} height={20} className="hover:scale-130"/>
        </a>
        <a
          href="http://www.instagram.com/codebyfaisal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/90 text-white p-2 rounded-xl aspect-square transition duration-200 hover:bg-gray-100 hover:text-black"
        >
          <InstagramLogoIcon width={20} height={20} className="hover:scale-130"/>
        </a>
      </div>
    </section>
  );
};

export default AuthorPage;
