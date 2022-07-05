import { v4 as uuidv4 } from 'uuid';
import Backery from '../images/backery.jpg';
import UTrackerImg from '../images/utracker.jpg';
import Onepiece from '../images/one piece.jpg';
import Dota2 from '../images/Dota2.jpg';
import Demonslayer from '../images/Demonslayer.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'To Do List App',
    desc:
      'An applicationts you write, organize, and reprioritize your tasks more efficiently. They also let you attach notes, links, and files to a task, and many let you see when someone else has completed a task. In many ways, a good to-do app is the ultimate productivity app.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'One Piece',
    desc:
      'One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueishas shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled into 102 tankōbon volumes as of April 2022.',
    img: Onepiece,
  },
  {
    id: uuidv4(),
    name: 'Dota 2',
    desc:
      'Dota 2 is a multiplayer online battle arena video game developed and published by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainments Warcraft III: Reign of Chaos.',
    img: Dota2,
  },
  {
    id: uuidv4(),
    name: 'Demon Slayer',
    desc:
      'Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.',
    img: Demonslayer,
  },
  {
    id: uuidv4(),
    name: 'Backery Management System',
    desc:
      'A bakery management system should be robust enough to handle all the bakery operations efficiently. From handling online orders to managing inventory, the bakery POS should help you take care of everything. Here are some features you should look for in your bakery management system.',
    img: Backery,
  },
];

export default projects;
