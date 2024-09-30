//import RESTSerializer from '@ember-data/serializer/rest';
import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class EventSerializer extends JSONAPISerializer { //extends RESTSerializer {

  keyForAttribute(attr) {
    return attr.replace(/_/g, '-');
  }
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    //console.log('EventSerializer ' + payload['activities']);
    if (payload && !Array.isArray(payload['activities'])) {
      console.log(payload);
      payload = {
        data: {
          id: payload.ssId,
          type: 'event',
          attributes: {
            id: payload.ssId,
            name: payload.ssName,
            imageUrl: payload.ssResourceList[0].imageUrl[0],
            category: payload.ssResourceList[0].ssResourceName,
            location: payload.location,
          },
        },
      };
      console.log(payload);
    }

    if (Array.isArray(payload['activities'])) {
      // payload['activities'].map(event => {
      //     console.log(event);
      // });
      payload = {
        data: payload['activities'].map((event) => ({
          id: event.ssId,
          type: 'event',
          attributes: {
            id: event.ssId,
            name: event.ssName,
            imageUrl: event.imageUrl,
            category: event.category,
            location: event.location,
          },
        })),
      };
    }
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
  }
  
  // primaryKey = 'ssId';

  // attrs = {
  //   name: 'ssName',
  //   imageUrl: 'imageUrl',
  //   category: 'category',
  //   location: 'location',
  // };

  // normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //   //console.log(payload);

  //   if (!Array.isArray(payload['activities'])) {
  //     console.log(payload.ssResourceList[0].imageUrl[0]);
  //     payload = {
  //       id: payload.ssId,
  //       name: payload.ssName,
  //       imageUrl: payload.ssResourceList[0].imageUrl[0],
  //     };
  //   }
  //   return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
  // }

  // normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
  //   //console.log(payload['activities']);
  //   payload = { events: payload['activities'] };
  //   return super.normalizeArrayResponse(store, primaryModelClass, payload, id, requestType);
  // }
}
