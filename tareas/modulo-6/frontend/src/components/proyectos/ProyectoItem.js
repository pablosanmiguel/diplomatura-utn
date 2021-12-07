const ProyectoItem = (props) => {
    const { page, web_address, image, detail } = props;
    return (
        <div className="portfolio-item">
            <div className="imagen">
                <img src={image} alt="" />
            </div>
            <div className="texto">
                <h3>{page}</h3>
                <a href={web_address} target="_blank" rel="noreferrer"><i class="icon-link"></i> {web_address}</a>
                <p>{detail}</p>
            </div>
        </div>
    );
}

export default ProyectoItem;