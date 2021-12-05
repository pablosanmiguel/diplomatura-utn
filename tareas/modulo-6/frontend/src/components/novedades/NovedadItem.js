const NovedadItem = (props) => {
    const { title, subtitle, image, body } = props;
    return (
        <div className="portfolioHolder">
            <div className="portfolio-item imagen">
                <img src={image} alt="" />
            </div>
            <div className="portfolio-item texto">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <div dangerouslySetInnerHTML={{ __html: body }} />
                <hr />
            </div>
        </div>
    );
}

export default NovedadItem;