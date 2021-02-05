import Doclist from './Doclist';
export default function(props: { route: any }) {
 console.log(props.route)
  return (
    <div>
      <Doclist location={props.route} />
   
    </div>
  );
}
