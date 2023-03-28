
import './style.css'
function Footer({hasError,load, Number, NewNumber }) {
    
   



    const pages = [1,2,3,4,5,6,7,8,9];
    
    const counted = [];
    
    pages.map((i)=> counted.push(<button onClick={() => NextPage('number', i)} type='button'>{i}</button>))



    
    const   NextPage = (type, number) => {
        switch (type) {
            case 'next':
                if (Number < 9) NewNumber(PageNumber =>PageNumber + 1);
                break;
            case 'before':
                if (Number > 1) NewNumber(PageNumber => PageNumber - 1);
                break;
            default:
                NewNumber(number);
                break;
        }
    }
    
   
    if(load){
        return
    }
    if(hasError){
        return
    }

    return (

        <div className="parent_page_number">

            
            <button disabled={Number===1}   onClick={() => NextPage('before')}>before</button>
            <h5>page:{Number}</h5>
            <button disabled={Number===9}  onClick={() =>NextPage('next')}>next</button>
     
         
        </div >

    )
}

export default Footer