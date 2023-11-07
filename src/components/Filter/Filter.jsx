const perfomer = [
  {
      id: 0,
      name: 'Neil Armstrong',
  }, {
      id: 1,
      name: 'Alan Bean',
  }, {
      id: 2,
      name: 'Peter Conrad',
  },
  {
      id: 3,
      name: 'Edgar Mitchell',
  },
  {
      id: 4,
      name: 'Alan Shepard',
  }
];


const year = [
  {
      id: 0,
      name: 2000,
  }, {
      id: 1,
      name: 2010,
  }, {
      id: 2,
      name: 2015,
  },
  {
      id: 3,
      name: 2020,
  }
];

const genre = [
  {
      id: 0,
      name: 'поп-музыка',
  }, {
      id: 1,
      name: 'хип-хоп',
  }, {
      id: 2,
      name: 'рок',
  },
  {
      id: 3,
      name: 'джаз',
  },
  {
      id: 4,
      name: 'классика',
  }
];

function filterList ({item}) {
const list = item.map(i => )

}

function Filter({ filterName,isOpened, filterList,  action }) {

  return (
    <div onClick={action}>
      <div className="filter__button  _btn-text">{filterName}</div>
{isOpened && <div>{filterList}</div>}
    </div>
  )


}

export default Filter


