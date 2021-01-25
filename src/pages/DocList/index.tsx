import Doclist from './Doclist';
export default function(props: { location: any }) {
 
  return (
    <div>
      <Doclist location={props.location.query} />
   
    </div>
  );
}
