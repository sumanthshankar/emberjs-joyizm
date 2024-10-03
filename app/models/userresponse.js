import Model from '@ember-data/model';

export default class UserresponseModel extends Model {
    @attr('string') email;
    @attr('string') password;
    @attr('string') category;
    @attr('string') location;
}
