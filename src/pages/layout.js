import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiBell, FiMaximize, FiMenu, FiMessageCircle, FiUser, FiCircle, FiChevronRight, FiChevronDown } from "react-icons/fi";

export default function Layout() {
    return (
        <>
            <div id="sideBar">
                <a src="http://localhost:3000/" id="title">
                    <img src="images/fe-react-admin.png" id="titleImg" />
                    <p id="titleName">Base Admin</p>
                </a>
                <div id="userPanel">
                    <img id="avatar" src="images/avatar.png"></img>
                    <p id="userName">Gia Khiem</p>
                </div>
                <div id="option">
                    <a>
                        <FiUser id='iconUser'></FiUser>
                        <p>Quản lý User</p>
                        <FiChevronRight className='iconArrowExtension'></FiChevronRight>
                        <FiChevronDown className='iconArrowExtension'></FiChevronDown>
                    </a>
                    <a>
                        <FiCircle></FiCircle>
                        <p>Danh sách User</p>
                    </a>
                    <a>
                        <FiCircle></FiCircle>
                        <p>Thêm mới User</p>
                    </a>
                </div>
            </div>
            <Navbar bg="light" data-bs-theme="light" id='navBar'>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link><FiMenu></FiMenu></Nav.Link>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                        <Nav.Link id='iconMessage'><FiMessageCircle></FiMessageCircle></Nav.Link>
                        <Nav.Link id="iconBell"><FiBell></FiBell></Nav.Link>
                        <Nav.Link id="iconMaximize"><FiMaximize></FiMaximize></Nav.Link>
                        <Nav.Link id="logOut">Log out</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div id='content'>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6" id='contentName'>
                                Profile
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li>
                                        <a href='#'>Home</a>
                                    </li>
                                    <li>/</li>
                                    <li>Profile</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className='content'>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-3">
                                    <div class="card-header text-white bg-success">
                                        <h3 class="card-title">Profile</h3>
                                    </div>
                                    <form>
                                        <div class="p-3 col-6">
                                            <div class="mb-3">
                                                <img src="1693038327552-57562320-image (2).png" class="mb-2 avatar" alt="avatar user" />
                                                <input type="file" class="form-control" name="avatar" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="inputName" class="form-label">Họ tên
                                                    <span class="text-danger fw-bold">*</span>
                                                </label>
                                                <input type="text" class="form-control" id="inputName" name="name" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="inputName" class="form-label">Email
                                                    <span class="text-danger fw-bold">*</span>
                                                </label>
                                                <input disabled="" type="email" class="form-control" value="tagiakhiem2000@gmail.com" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="inputPhone" class="form-label">Số điện thoại
                                                    <span class="text-danger fw-bold">*</span>
                                                </label>
                                                <input disabled="" type="text" class="form-control" value="0981934614" />
                                            </div>
                                            <div class="mb-3">
                                                <div>
                                                    <label class="form-label">Phân quyền
                                                        <span class="text-danger fw-bold">*</span>
                                                    </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" id="inputLevelAdmin" disabled="" checked="" />
                                                    <label class="form-check-label" for="inputLevelAdmin">Admin</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" id="inputLevelUser" disabled="" />
                                                    <label class="form-check-label" for="inputLevelUser">User</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn btn-success">Cập nhật</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className='content'>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-3">
                                    <div class="card-header">
                                        <h3 class="card-title">Tìm kiếm</h3>
                                    </div><div class="card-body">
                                        <form><div class="row mb-3">
                                            <div class="col-3">
                                                <input type="text" class="form-control" placeholder="Họ tên" name="name" />
                                            </div><div class="col-3">
                                                <input type="email" class="form-control" placeholder="Email" name="email" />
                                            </div>
                                            <div class="col-3">
                                                <input type="text" class="form-control" placeholder="Số điện thoại" name="phone" />
                                            </div>
                                            <div class="col-3">
                                                <select class="form-select" aria-label="Phân quyền" name="level">
                                                    <option value="">Phân quyền</option><option value="1">Super Admin</option>
                                                    <option value="2">Admin</option>
                                                    <option value="3">User</option>
                                                </select></div>
                                        </div>
                                            <div class="row"><div class="col-auto">
                                                <button type="submit" class="btn btn-primary me-2">Tìm kiếm</button>
                                                <button type="button" class="me-2 btn btn-success">Import</button>
                                                <button type="button" class="btn btn-info">Export</button>
                                            </div></div></form></div></div>
                                <div class="card mb-3">
                                    <div class="card-header">
                                        <h3 class="card-title">Danh sách users</h3>
                                    </div>
                                    <div class="card-body">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr class="text-center">
                                                    <th style={{"width": "10px"}}>#</th>
                                                    <th>Họ tên</th><th>Email</th>
                                                    <th>Số điện thoại</th>
                                                    <th>Phân quyền</th>
                                                    <th style={{"width": "15%"}}>Label</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>VietToan 2</td>
                                                    <td>viettoan2906962@gmail.com</td>
                                                    <td>0344998483</td>
                                                    <td>Admin</td>
                                                    <td class="text-center">
                                                        <button type="button" class="btn btn-danger me-2">Xóa</button>
                                                        <a class="btn btn-success" href="/users/64e47f5d5f2198e4045b8641/edit">Chỉnh sửa</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}