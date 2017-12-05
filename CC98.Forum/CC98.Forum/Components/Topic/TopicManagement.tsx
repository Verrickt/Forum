﻿import * as React from 'react';
import * as Utility from '../../Utility';
export class TopicManagement extends React.Component<{ topicId, update }, { state, reason, tips, days, board }>{
    constructor(props) {
        super(props);
        this.confirm = this.confirm.bind(this);
        this.close = this.close.bind(this);
        this.showHighlight = this.showHighlight.bind(this);
        this.showNormal = this.showNormal.bind(this);
        this.showNoReason = this.showNoReason.bind(this);
        this.showDays = this.showDays.bind(this);
        this.showBoard = this.showBoard.bind(this);
        this.reasonInput = this.reasonInput.bind(this);
        this.daysInput = this.daysInput.bind(this);
        this.boardInput = this.boardInput.bind(this);
        this.state = { state: "normal", reason: "", tips: "", days: 0, board: null };
    }
    showNormal() {
        this.setState({ state: 'normal' });
    }
    showNoReason() {
        this.setState({ state: 'noReason' });
    }
    showDays() {
        this.setState({ state: 'days' });
    }
    showHighlight() {
        this.setState({ state: 'highlight' });
    }
    showBoard() {
        this.setState({ state: 'board' });
    }
    confirm() {
        switch (this.state.state) {
            case 'noraml':
                if ($("input[name='reason']:checked").val()) {
                    if (this.state.reason === "") {

                    } else {
                        this.setState({ tips: "请输入原因！" });
                    }
                    const UIId = `#manage${this.props.topicId}`;
                    $(UIId).css("display", "none");
                    this.props.update();
                } else {
                    this.setState({ tips: "请输入原因！" });
                }
                break;
            case 'highlight':
                if ($("input[name='reason']:checked").val()) {
                    if (this.state.reason === "") {

                    } else {
                        this.setState({ tips: "请输入原因！" });
                    }

                    const UIId = `#manage${this.props.topicId}`;
                    $(UIId).css("display", "none");
                    this.props.update();
                } else {
                    this.setState({ tips: "请选一个选项！" });
                }
                break;

        }

    }
    close() {
        const UIId = `#manage${this.props.topicId}`;
        $(UIId).css("display", "none");
    }
    reasonInput(e) {

        this.setState({ reason: e.target.value });

    }
    daysInput(e) {

        this.setState({ days: e.target.value });

    }
    boardInput(e) {

        this.setState({ board: e.target.value });

    }
    componentDidMount() {
        const UIId = `#manage${this.props.topicId}`;
        const ele = $(UIId);
        const top = $("#root").height()- - ele.height();
        const left = ($("#root").width()/2 - ele.width()) / 2;
        const scrollTop = $(document).scrollTop();
        const scrollLeft = $(document).scrollLeft();
        return ele.css({ position: 'absolute', 'top': top + scrollTop, left: left + scrollLeft }); 
    }
    render() {
        let info;

        const normalInfo = <div className="column">
            <div className="row manageOperation" style={{ justifyContent: "space-around", marginTop: "1rem" }}>
                <div >原因</div>
                <input type="text" value={this.state.reason} onChange={this.reasonInput} />

            </div>
            <div>{this.state.tips}</div>
        </div>;
        const noReasonInfo = null;
        const daysInfo = <div className="column">
            <div className="row manageOperation" style={{ justifyContent: "space-around", marginTop: "1rem" }}>
                <div >天数</div>
                <input type="text" value={this.state.days} onChange={this.daysInput} />
            </div>
            <div className="row manageOperation" style={{ justifyContent: "space-around", marginTop: "1rem" }}>
                <div >原因</div>
                <input type="text" value={this.state.reason} onChange={this.reasonInput} />

            </div>
            <div>{this.state.tips}</div>
        </div>;
        const boardInfo = <div className="column">
            <div className="row manageOperation" style={{ justifyContent: "space-around", marginTop: "1rem" }}>
                <div >版面</div>
                <input type="text" value={this.state.board} onChange={this.boardInput} />
            </div>
            <div className="row manageOperation" style={{ justifyContent: "space-around", marginTop: "1rem" }}>
                <div >原因</div>
                <input type="text" value={this.state.reason} onChange={this.reasonInput} />

            </div>
            <div>{this.state.tips}</div>
        </div>;
        switch (this.state.state) {
            case 'normal':
                info = normalInfo; break;
            case 'noReason':
                info = noReasonInfo; break;
            case 'days':
                info = daysInfo; break;
            case 'board':
                info = boardInfo; break;
        }
        const UI = <div className="column manageInfo" id="award">

            <div className="column" style={{ alignItems:'center' }}>

                <div className="row">
                    <div className="row">
                        <input type="radio" name="option" value="查看IP" onClick={this.showNoReason} />
                        <div>查看IP</div>
                    </div>

                    <div className="row">
                        <input type="radio" name="option" value="锁定" onClick={this.showNormal} />
                        <div>锁定</div>
                    </div>

                    <div className="row">
                        <input type="radio" name="option" value="下沉" onClick={this.showDays} />
                        <div>下沉</div>
                    </div>

                    <div className="row">
                        <input type="radio" name="option" value="禁止热门" onClick={this.showNormal} />
                        <div>禁止热门</div>
                    </div>
                </div>
                <div className="row" style={{ marginTop:"1rem" }}>
                    <div className="row">
                        <input type="radio" name="option" value="删除" onClick={this.showNormal} />
                        <div>删除</div>
                    </div>

                    <div className="row">
                        <input type="radio" name="option" value="修复" onClick={this.showNoReason} />
                        <div>修复</div>
                    </div>

                    <div className="row">
                        <input type="radio" name="option" value="移动" onClick={this.showBoard} />
                        <div>移动</div>
                    </div>

                    <div className="row">
                        <input type="radio" name="option" value="提升" onClick={this.showDays} />
                        <div>提升</div>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "1rem" }}>
                    <div className="row">
                        <input type="radio" name="option" value="固顶" onClick={this.showNormal} />
                        <div>固顶</div>
                    </div>

                    <div className="row">
                        <input type="radio" name="option" value="全站固顶" onClick={this.showNormal} />
                        <div>全站固顶</div>
                    </div>

                    <div className="row">
                        <input type="radio" name="option" value="加精" onClick={this.showNormal} />
                        <div>加精</div>
                    </div>

                    <div className="row">
                        <input type="radio" name="option" value="高亮" onClick={this.showHighlight} />
                        <div>高亮</div>
                    </div>
                </div>
            </div>
            {info}

        </div>;
        const UIId = `manage${this.props.topicId}`;
        const highlightOptionId = `manage${this.props.topicId}`;
        return <div style={{ display: "none" }} id={UIId} className="postManagement" >
            {UI}
            < div className="row" style={{ justifyContent: "space-around" }}>
                <button onClick={this.confirm} className="confirmManagement">确认</button>
                <button onClick={this.close} className="confirmManagement">关闭</button>
            </div >
        </div >;
    }
}