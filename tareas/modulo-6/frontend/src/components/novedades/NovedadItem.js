const NovedadItem = (props) => {
    const { title, subtitle, image, body } = props;
    return (
        <div className="portfolio-item">
            <div className="imagen">
                <img src={image} alt="" />
            </div>
            <div className="texto">
                <h3>{title}</h3>
                <a href={subtitle} target="_blank" rel="noreferrer"><i class="icon-link"></i> {subtitle}</a>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default NovedadItem;