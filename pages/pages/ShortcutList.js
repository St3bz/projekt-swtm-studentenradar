const ShortcutList = (props) => {
    const shortcut = props.shortcut; 
    return (  
        <div className="boxField">
            {shortcut.map((scut) => (
                <div className="shortcutPrev" key={scut.id}>
                    <a href={scut.link}><img src={scut.image} className='shortcutImage' alt="shortcut" /></a>
                    <h2>{scut.title}</h2>
                </div>
            ))}
        </div>
    );
}
 
export default ShortcutList;