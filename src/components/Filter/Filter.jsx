function Filter({ filterName,isOpened, filterList, action }) {
  return (
    <div onClick={action}>
      <div className="filter__button  _btn-text">{filterName}</div>
{isOpened && <div>{filterList}</div>}
    </div>
  )
}

export default Filter
