import styled from "styled-components";
export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor:pointer;
    img{
      width: 3.4rem;
    }
  }
  .card{
    background:white;
    border-radius: 12px;
    height:10rem;
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }
  h5{
    display:flex;
    justify-content:center;
    color: var(--green);
  }
  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  .about-para{
    text-align: justify;
  }
  .skill-span{
    color: var(--green);
  }

  .about-image{
    text-align: center;
   img{
     margin-top: 4rem;
     width: 60%;
     height: 60%;
     border-radius:15px;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  .load-bar {
    margin-top:1rem;
    margin-bottom:.3rem;
    height: 5px;
    width: 90%;
    margin-left: 5%;
    background: black;
    border-radius: 5px;
  }
  
  .progress {
    height: 5px;
    width: 0; /* Initially 0 width */
    background: var(--green);
    border-radius: 5px;
    animation: loadAnimation 5s forwards; /* Animation duration 1 second */
  }
  
  @keyframes loadAnimation {
    100% {
      width: 85%; /* When animation completes, width becomes 85% */
    }
  }
  
  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`;
