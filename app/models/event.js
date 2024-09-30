import Model, { attr } from '@ember-data/model';

export default class EventModel extends Model {
  @attr('string') name;
  @attr('string') imageUrl;
  @attr('string') category;
  @attr('string') location;
}
