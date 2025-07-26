import { useState, useEffect } from "react"
import './Body.css'

function Body() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const link = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const json = await response.json();
                if (!json.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                    throw new Error('Restaurant data not found in response');
                }
                
                const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
                setData(restaurants);
                setFilteredData(restaurants);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Unable to load restaurants. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        const filtered = data.filter(restaurant => 
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
            restaurant.info.areaName.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filtered);
    }
    
    if (error) {
        return (
            <div className="body-container">
                <div className="error">{error}</div>
                <button onClick={() => window.location.reload()} className="retry-button">
                    Retry
                </button>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="body-container">
                <div className="loading">Loading restaurants...</div>
            </div>
        );
    }

    return (
        <div className="body-container">
            <div className="search-container">
                <input 
                    type="text"
                    placeholder="Search restaurants..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="restaurant-grid">
                {filteredData.length > 0 ? (
                    filteredData.map((restaurant) => (
                        <div key={restaurant.info.id} className="restaurant-card">
                            <img 
                                src={link + restaurant.info.cloudinaryImageId} 
                                alt={restaurant.info.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/food-plate-icon.svg";
                                }}
                            />
                            <div className="restaurant-info">
                                <h3>{restaurant.info.name}</h3>
                                <p>{restaurant.info.areaName}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">No restaurants found</div>
                )}
            </div>
        </div>
    );
}

export default Body;