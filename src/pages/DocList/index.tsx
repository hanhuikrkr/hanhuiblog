import Doclist from './Doclist';
export default function(props: { route: any }) {

  return (
    <div>
      <Doclist location={props.route} />
   
    </div>
  );
}
