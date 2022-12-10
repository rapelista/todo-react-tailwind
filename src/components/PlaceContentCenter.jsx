function PlaceContentCenter(props) {
  return (
    <div className="bg-slate-800 grid place-content-center min-h-screen  font-mono text-center">
      {props.children}

      <div className="text-blue-100 absolute bottom-3 block w-screen">
        build with react &hearts;{" "}
        <a href="https://github.com/rapelista" target="_blank">
          gustang
        </a>
      </div>
    </div>
  );
}

export default PlaceContentCenter;
