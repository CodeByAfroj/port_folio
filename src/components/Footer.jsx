// @flow strict

import { CgGitFork } from "react-icons/cg";
import { IoEye, IoStar } from "react-icons/io5";
import useGithubRepoStats from "../utils/useGithub";
import { useEffect, useState } from "react";

function Footer() {
  const { stars, forks } = useGithubRepoStats("CodeByAfroj", "port_folio");
   const [views, setViews] = useState("...");

  useEffect(() => {
    fetch("/api/views")
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch(() => setViews("0"));
  }, []);

  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">

        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">

          <p className="text-md">
            © Developer Portfolio by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/afroj-mulani"
              className="text-[#16f2b3]"
            >
              Afroj Mulani
            </a>
          </p>

          <div className="flex items-center gap-5">

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoEye />
              <span className="flex items-center gap-1">
                Views {views}
              </span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/CodeByAfroj/port_folio"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star ({stars})</span>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/CodeByAfroj/port_folio"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>Fork ({forks})</span>
            </a>


          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
