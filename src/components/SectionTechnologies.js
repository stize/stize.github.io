import React from 'react';
import _ from 'lodash';

import {htmlToReact, withPrefix} from '../utils';

export default class SectionTechnologies extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className={'block technologies-block bg-' + _.get(section, 'background', null) + ' outer'}>
              <div className="block-header inner-small">
                {_.get(section, 'title', null) && (
                <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, 'subtitle', null))}
                </p>
                )}
              </div>
              {_.get(section, 'technologies', null) && (
              <div className="inner">
                <div className="grid">
                  {_.map(_.get(section, 'technologies', null), (technology, technology_idx) => (      
                  <blockquote key={technology_idx} className="cell technology">
                    <div className="technology-inside">                      
                      <footer className="technology-footer">
                        {_.get(technology, 'img', null) && (
                        <img className="technology-avatar" src={withPrefix(_.get(technology, 'img', null))} title={_.get(technology, 'title', null)} alt={_.get(technology, 'title', null)}/>
                        )}                        
                      </footer>
                    </div>  
                  </blockquote>                
                  ))}
                </div>
              </div>
              )}
            </section>
        );
    }
}
