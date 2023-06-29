import { LightningElement, wire } from 'lwc';
import getInfo from '@salesforce/apex/mapXXXXoller.getInfo'

export default class MapInLWC extends LightningElement {
    mapMarkers=[]
    markersTitle="Locations"
    @wire(getInfo)
    wireHandler({data,error}){
        if(data){
            console.log(data)
            this.formatResponse(data)
        }
        if(error){
            console.error(error)
        }
    }

    formatResponse(data) {
        this.mapMarkers = data.map(item => {
            return {
                location: {
                    City: item.OriXXXXXXX || '', // Use the appropriate fields for latitude and longitude
                    Country: item.XXXXXXXXntry__c || ''
                },
                title: item.Name,
                description: 'Origin', // Add a description for the marker
                icon: 'utility:salesforce1'
            }
        });
        this.mapMarkers.push({
            location: {
                City: item.DestXXXXXXX__c || '', // Use the appropriate fields for latitude and longitude
                Country: item.DestiXXXXXXXX__c || ''
            },
            title: item.Name,
            description: 'Destination', // Add a description for the marker
            icon: 'utility:salesforce1'
        });
        this.selectedMarker = this.mapMarkers.length && this.mapMarkers[0].value;
    }

    callMarkerHandler(event){
        this.selectedMarker = event.detail.selectedMarkerValue;

    }

}