# GameHistoryTimeline

A HTML5 timeline about the history of eletronic games, since 1950 until nowadays.

## Installation

Clone the project: `git clone git@github.com:rodrigogrow/GameHistoryTimeline.git`

## Live Demonstration

[Demo](http://rodrigogrow.github.io/GameHistoryTimeline/)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

TODO: Write credits

## Game Info Example - Json
```javascript
{
        'type': 'game', // game or console
        'name': 'Game Name',
        'authors': ['Fulano de tal', 'Ciclano'],
        'company': ['CompanyX'],  
        'year': '1951',
        'date': '20-06-1951', // Day, Month, Year
        'headline': 'First Game about sport',
        'resume': [
            'Lorem ipsum dolor sit amet, ut viverra vestibulum odio, ',
            'aliquam in massa, velit rutrum pede ipsum mauris duis, ',
            'congue massa sem elit, integer risus. Faucibus in lacus, ',
            'ligula ornare nibh, elit suspendisse tortor sed volutpat, ',
            'etiam tempus wisi semper montes odio, lorem vitae vel eu '
        ].join(''),
        'full_text': [
            'Lorem ipsum dolor sit amet, ut viverra vestibulum odio, ',
            'aliquam in massa, velit rutrum pede ipsum mauris duis, ',
            'congue massa sem elit, integer risus. Faucibus in lacus, ',
            'ligula ornare nibh, elit suspendisse tortor sed volutpat, ',
            'etiam tempus wisi semper montes odio, lorem vitae vel eu ',
            'convallis. Volutpat blandit egestas et libero eu per, venenatis ',
            'aenean, proin quis aliquam viverra potenti vestibulum auctor, ',
            'non amet tellus sodales. In ullamco tellus risus nisl morbi amet. ',
            'Vel quisque nunc in placerat. Vitae id urna, nulla suspendisse, ',
            'molestie sodales ac nisl nulla, tempus occaecati. Sodales lectus, ',
            'mauris dis lectus amet, nascetur ipsum, hac suspendisse blandit eros.'
        ].join(''),
        'thumbnail': 'thumbnail_example.png',
        'main_img': {'name': 'main_picture.png', 'caption': "description"},
        'images': [
            {'name': 'picture1.png', 'caption': "description1"},
            {'name': 'picture2.png', 'caption': "description2"},
            {'name': 'picture3.png', 'caption': "description3"}
        ],
        'video_gameplay': [
            {'url': 'video_url', 'caption': "description", 'type': "youtube"} // type: youtube or vimeo
        ],
        'demos': [
            {'url': 'demonstration_url', 'caption': "description"}
        ],
        'references': [
            {'url': 'reference_url1', 'caption': "description"},
            {'url': 'reference_url2', 'caption': "description"},
            {'url': 'reference_url3', 'caption': "description"}
        ]
}
```
## License

This project is available under the terms of the [MIT License](LICENSE).
