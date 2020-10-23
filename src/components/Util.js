import React from 'react'

export const convertToDate = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    let convertedDate=new Date(date).toLocaleDateString([],options);
    return convertedDate
    
}

export const typeToCSS = (type) => {
    switch(type) {
      
        case 'Sports':
          return 'fas fa-volleyball-ball';
        case 'Art':
          return 'fas fa-paint-brush';
        case 'Movie':
            return 'fas fa-film';
        case 'Cooking':
                return 'fas fa-utensil-spoon'; 
       case 'Music':
                  return 'fas fa-music'; 
       case 'Comedy':
                    return 'fas fa-smile';            
        default:
          return 'foo';
      }
    
}