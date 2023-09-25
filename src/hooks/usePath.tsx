// import { useLocation } from "react-router-dom";
import { useRouter } from 'next/router'

export const usePath = () => {
  // const { pathname } = useLocation();
  const { pathname } = useRouter();
  let path = pathname;
  console.log(pathname)
  
  if(path.slice(0, 9) === '/projects') {
    path = '/projects';
  }

  const isCurrentPage = (link) => {

    if (link === path) return true;

    return false;
  }

  return {
    isCurrentPage,
  }

}
