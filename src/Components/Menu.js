import React, { useEffect } from 'react';
import $ from 'jquery';

export default function Menu({ title, listObject }) {

  useEffect(() => {
    const allList = document.querySelectorAll("li");
    
    function changeMenuActive() {
      $("li").removeClass("active");
      $(this).addClass("active");

    }

    allList.forEach((n) => {
      n.addEventListener("click", changeMenuActive);
    })
  }, []);


  return (
    <div className="MenuContainer">
      <p className='title'>{title}</p>

      <ul>
        {listObject &&
          listObject.map((li) => (
            <li key={li.id}>
              <a href="#">
                <i>{li.icon}</i>
                <span> {li.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}


