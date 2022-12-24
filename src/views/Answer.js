import React, { useState, useEffect } from 'react';



function getCommunityRegion(community) {
    if (["Addison Reserve", "Four Season", "Lexinton Club", "Long Lake Estates", "Rio Poco"].includes(community)) {
        return "South-Delray-West";
    } else if (["Bridges", "Bristol Point", "Delaire", "Emerald Dunes", "Gleneagles", "Hammock Reserve", "Huntington Lakes", "Miz Preserve", "Mizner CC", "New Port Bay Club", "Palm Greens", "Seagate Hamlet"].includes(community)) {
        return "South-Delray-Mid";
    } else if (["Ambassedor East", "Bermuda Club", "Highland Beach", "Highland Towers", "Mallory Square", "Ocean Crest", "Porta Bella", "Tropic Isles"].includes(community)) {
        return "South-Delray-East";
    } else if (["Boca Falls", "Boca Greens", "Boca Grove", "Boca Isles North", "Boca Isles South", "Boca Lago", "Boca Park", "Boca West", "Boca Woods", "Centurnia", "Centurnia Isles", "Estancia West", "Mission Bay", "Seasons", "Seven Bridges", "Stonebridge", "The Oaks", "Woodfield CC"].includes(community)) {
        return "South-Boca-West";
    } else if (["Boca Bath Tennis", "Boca CC", "Boca Polo", "Bocaire", "Broken Sound", "Colonades", "Estancia", "Fox Landing", "Horseshoe Acres Boca", "Hunt Club", "Le Jardins", "Santa Barbara", "St. Andrews CC"].includes(community)) {
        return "South-Boca-Mid";
    } else if (["Boca Bay Colony", "East Boca", "El Cortijo", "Mizner Towers", "Pelican Harbor", "Royal Palm Club", "Sanctuary Boca", "Toscana", "Woodfield Hunt Club"].includes(community)) {
        return "South-Boca-East";
    } else if (["Aberdeen", "Equus", "Hunters Run", "Palm Shores at Gabels End", "Platina", "Village of Golf"].includes(community)) {
        return "South-Boynton-West";
    } else if (["Cascades"].includes(community)) {
        return "South-Boynton-Mid";
    } else if (["East Boynton", "Inlet Plaza", "Ocean Ridge", "Ocean Ridge Yacht Club", "Ocean Walk", "Palladium", "Tamarind", "Turtle Beach", "Wellington Arms"].includes(community)) {
        return "South-Boynton-East";
    } else if (["Baywinds", "Breakers West", "Buena Vida", "Century Village", "Madison Green", "Olympia", "Portosol", "Riverwalk", "Wellington"].includes(community)) {
        return "Central-West-Palm-Beach-West";
    } else if (["Lake Clarke Shores", "Palm Beach Lakes", "Renaissance", "WPB CC"].includes(community)) {
        return "Central-West-Palm-Beach-Mid";
    } else if (["Land of Presidents", "Portofino North", "Portofino South", "Riverbridge", "Sun N Surf", "Trump Plaza", "Villa Del Lago"].includes(community)) {
        return "Central-West-Palm-Beach-East";
    } else if (["Homeland", "Wycliffe"].includes(community)) {
        return "Central-Lake-Worth-West";
    } else if (["Atlantis", "Fountains", "SherBrook"].includes(community)) {
        return "Central-Lake-Worth-Mid";
    } else if (["College Park", "Half Moon Bay", "Hypoluxo Island", "LW East", "Waterview Towers"].includes(community)) {
        return "Central-Lake-Worth-East";
    } else if (["Islands of Jupiter", "Jupiter CC"].includes(community)) {
        return "North-Jupiter-Mid";
    } else if (["Admiral's Cove", "Admiral Cove Golf Village", "French Creek", "French Harbor", "French Landing", "French Reserve", "Jonathon's Landing", "Juno Beach", "Olympus", "Sea Colony", "Tequesta"].includes(community)) {
        return "North-Jupiter-East";
    } else if (["Ballen Isles", "Bay Hill Estates", "Ibis", "Ironhorse", "Orchid Preserve", "Palm Beach Country Estates", "Steeplechase"].includes(community)) {
        return "North-Palm-Beach-Gardens-West";
    } else if (["East Point", "Evergrene", "Horseshoe Acres", "Mirabella", "Mirasol", "Old Marsh", "Old Palm", "Paloma", "Shady Lakes"].includes(community)) {
        return "North-Palm-Beach-Gardens-Mid";
    } else if (["Corniche", "Harbor Isles", "Lost Tree Village (LTV)", "Marina Gardens", "Prosperity Harbor", "Sanctuary", "Singer Island", "The Cove", "Twelve Oaks"].includes(community)) {
        return "North-Palm-Beach-Gardens-East";
    } else if (["PGA NAT", "PGA Nat Club", "PGA Nat Golf Club", "PGA Nat Village", "PGA Village", "Ryder Cup Village", "Villas of Marsh Bend", "Winston Trails"].includes(community)) {
        return "North-North-Palm-Beach-Mid";
    }
    else {
        return "Uknown Community";
    }
}

export default function FinalAnswer() {
    const [community, setCommunity] = useState('');
    const [search, setSearch] = useState('');

    const allCommunities = ["Addison Reserve", "Four Season", "Lexinton Club", "Long Lake Estates", "Rio Poco", "Bridges", "Bristol Point", "Delaire", "Emerald Dunes", "Gleneagles", "Hammock Reserve", "Huntington Lakes", "Miz Preserve", "Mizner CC", "New Port Bay Club", "Palm Greens", "Seagate Hamlet", "Ambassedor East", "Bermuda Club", "Highland Beach", "Highland Towers", "Mallory Square", "Ocean Crest", "Porta Bella", "Tropic Isles", "Boca Falls", "Boca Greens", "Boca Grove", "Boca Isles North", "Boca Isles South", "Boca Lago", "Boca Park", "Boca West", "Boca Woods", "Centurnia", "Centurnia Isles", "Estancia West", "Mission Bay", "Seasons", "Seven Bridges", "Stonebridge", "The Oaks", "Woodfield CC", "Boca Bath Tennis", "Boca CC", "Boca Polo", "Bocaire", "Broken Sound", "Colonades", "Estancia", "Fox Landing", "Horseshoe Acres Boca", "Hunt Club", "Le Jardins", "Santa Barbara", "St. Andrews CC", "Boca Bay Colony", "East Boca", "El Cortijo", "Mizner Towers", "Pelican Harbor", "Royal Palm Club", "Sanctuary Boca", "Toscana", "Woodfield Hunt Club", "Aberdeen", "Equus", "Hunters Run", "Palm Shores at Gabels End", "Platina", "Village of Golf", "Cascades", "East Boynton", "Inlet Plaza", "Ocean Ridge", "Ocean Ridge Yacht Club", "Ocean Walk", "Palladium", "Tamarind", "Turtle Beach", "Wellington Arms", "Baywinds", "Breakers West", "Buena Vida", "Century Village", "Madison Green", "Olympia", "Portosol", "Riverwalk", "Wellington", "Lake Clarke Shores", "Palm Beach Lakes", "Renaissance", "WPB CC", "Land of Presidents", "Portofino North", "Portofino South", "Riverbridge", "Sun N Surf", "Trump Plaza", "Villa Del Lago", "Homeland", "Wycliffe", "Atlantis", "Fountains", "SherBrook", "College Park", "Half Moon Bay", "Hypoluxo Island", "LW East", "Waterview Towers", "Islands of Jupiter", "Jupiter CC", "Admiral's Cove", "Admiral Cove Golf Village", "French Creek", "French Harbor", "French Landing", "French Reserve", "Jonathon's Landing", "Juno Beach", "Olympus", "Sea Colony", "Tequesta", "Ballen Isles", "Bay Hill Estates", "Ibis", "Ironhorse", "Orchid Preserve", "Palm Beach Country Estates", "Steeplechase", "East Point", "Evergrene", "Horseshoe Acres", "Mirabella", "Mirasol", "Old Marsh", "Old Palm", "Paloma", "Shady Lakes", "Corniche", "Harbor Isles", "Lost Tree Village (LTV)", "Marina Gardens", "Prosperity Harbor", "Sanctuary", "Singer Island", "The Cove", "Twelve Oaks", "PGA NAT", "PGA Nat Club", "PGA Nat Golf Club", "PGA Nat Village", "PGA Village", "Ryder Cup Village", "Villas of Marsh Bend", "Winston Trails"];


    const filteredCommunities = allCommunities.filter(c => c.toLowerCase().includes(search.toLowerCase()));

    console.log(filteredCommunities.length)


    function handleChange(event) {
        setCommunity(event.target.value);
    }

    function handleSearch(event) {
        setSearch(event.target.value);
    }

    useEffect(() => {
        const communityAreasArray = [
            'South-Delray-West',
            'South-Delray-Mid',
            'South-Delray-East',
            'South-Boca-West',
            'South-Boca-Mid',
            'South-Boca-East',
            'South-Boynton-West',
            'South-Boynton-Mid',
            'South-Boynton-East',
            'Central-West-Palm-Beach-West',
            'Central-West-Palm-Beach-Mid',
            'Central-West-Palm-Beach-East',
            'Central-Lake-Worth-West',
            'Central-Lake-Worth-Mid',
            'Central-Lake-Worth-East',
            'North-Jupiter-Mid',
            'North-Jupiter-East',
            'North-Palm-Beach-Gardens-West',
            'North-Palm-Beach-Gardens-Mid',
            'North-Palm-Beach-Gardens-East',
            'North-North-Palm-Beach-Mid',
        ];
        var communityArea = getCommunityRegion(community)
        const creationofsquare = () => {
            try {
                const element = document.createElement('div');
                element.innerHTML = "General Location";
                const hippoDiv = document.querySelector('.hippo');
                const lastChild = hippoDiv.lastChild;
                console.log(lastChild.className.slice(0,-15))
                if (lastChild && (communityAreasArray.includes(lastChild.className.slice(0,-15)))) {
                    hippoDiv.removeChild(lastChild);
                }
                var match = communityAreasArray.map((community) => {
                    if (communityArea === community) {
                        return community
                    } else {
                        return false
                    }
                });
                match = match.filter(x => x !== false)
                element.className = `${match[0]} global-map-box`
                document.querySelector('.hippo').appendChild(element);
                navigator.clipboard.writeText(match[0])
            } catch (error) {
                console.error(error);
            }
        }

        if (communityArea.startsWith('South-')) {
            // do something
            creationofsquare();
        } else if (communityArea.startsWith('Central-')) {
            // do something else
            creationofsquare();
        } else if (communityArea.startsWith('North-')) {
            // do something else
            creationofsquare();
        }

    }, [community])



    return (
        <div className='form'>
            <form>
                <label>
                    Community:
                    <input type="text" onChange={handleSearch} value={search} />
                    <select value={community} onChange={handleChange} size={filteredCommunities.length}>>
                        {filteredCommunities.map(c => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
            {community.length > 0 && (
                <div className='answer'>{getCommunityRegion(community)}</div>
            )}
        </div>
    );
}